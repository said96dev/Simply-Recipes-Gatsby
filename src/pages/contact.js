import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'
function Contact({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <Layout>
      <SEO title='Contact' />
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form
              className='form contact-form'
              action='https://formspree.io/f/mayzdkpl'
              method='POST'
            >
              <div className='form-row'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' />
              </div>

              <div className='form-row'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' />
              </div>
              <div className='form-row'>
                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message'></textarea>
              </div>
              <button type='submit' className='btn block'>
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className='featured-recipes'>
          <h5>Look at this Awesomsouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featuerd: { eq: true } }
    ) {
      nodes {
        cookTime
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        prepTime
      }
      totalCount
    }
  }
`

export default Contact
