
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req: Request) => {
  try {
    console.log('Starting RLS policy update...');

    // Update RLS policies to allow anonymous comments and likes
    const { error } = await supabase.rpc('exec_sql', {
      sql: `
        -- Enable RLS on comments table
        ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
        
        -- Drop existing comment policies
        DROP POLICY IF EXISTS "Authenticated users can create comments" ON public.comments;
        DROP POLICY IF EXISTS "Anyone can create comments" ON public.comments;
        DROP POLICY IF EXISTS "Anyone can view comments" ON public.comments;
        
        -- Create new policies for comments
        CREATE POLICY "Anyone can create comments" ON public.comments
          FOR INSERT WITH CHECK (true);
          
        CREATE POLICY "Anyone can view comments" ON public.comments
          FOR SELECT USING (true);

        -- Enable RLS on blog_posts table
        ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
        
        -- Drop existing blog post policies
        DROP POLICY IF EXISTS "Anyone can view published posts" ON public.blog_posts;
        DROP POLICY IF EXISTS "Authenticated users can manage posts" ON public.blog_posts;
        DROP POLICY IF EXISTS "Anyone can update likes on published posts" ON public.blog_posts;
        
        -- Create new policies for blog posts
        CREATE POLICY "Anyone can view published posts" ON public.blog_posts
          FOR SELECT USING (published = true OR auth.uid() IS NOT NULL);
          
        CREATE POLICY "Authenticated users can manage posts" ON public.blog_posts
          FOR ALL USING (auth.uid() IS NOT NULL);
          
        -- Allow ANYONE (including anonymous) to update likes on published posts
        CREATE POLICY "Anyone can update likes" ON public.blog_posts
          FOR UPDATE USING (published = true)
          WITH CHECK (published = true);

        -- Enable RLS on post_likes table
        ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;
        
        -- Drop existing like policies
        DROP POLICY IF EXISTS "Users can manage their likes" ON public.post_likes;
        
        -- Create new policies for post likes (only for authenticated users)
        CREATE POLICY "Users can manage their likes" ON public.post_likes
          FOR ALL USING (auth.uid() = user_id);
      `
    });

    if (error) {
      console.error("SQL execution error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log('RLS policies updated successfully');
    return new Response(JSON.stringify({ success: true, message: 'RLS policies updated successfully' }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error updating RLS policies:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
