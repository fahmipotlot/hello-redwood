import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <p><a href="https://www.instagram.com/fahmipotlot">IG</a></p>
      <p><a href="https://twitter.com/fahmipotlot">Twitter</a></p>
      <p><a href="https://github.com/fahmipotlot">GitHub</a></p>
      <BlogPostCell />
    </BlogLayout>
  )
}

export default HomePage