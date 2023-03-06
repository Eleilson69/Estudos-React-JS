import React, { Component } from 'react';
import { Posts } from '../../Posts';

import { loadPosts } from '../../../utils/load-posts';

import './styles.css';
import { Button } from '../../Button/Button';
import { TextInput } from '../../TextInput';

export default class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 5,
    searchValue: ''
  }

  async componentDidMount() {
    await this.handleloadPosts();
  }

  handleloadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      posts,
      page,
      allPosts,
      postsPerPage
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      searchValue: value
    })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        )
      })
      : posts;

    return (
      <section className='conteiner'>
        {!!searchValue &&
          <>
            <h1>Search value: {searchValue}</h1> <br /> <br />
          </>
        }

        <TextInput
          handleChange={this.handleChange}
          searchValue={searchValue}
        />

        {filteredPosts.length > 0 &&
          <Posts
            posts={filteredPosts}
          />
        }

        {filteredPosts.length === 0 &&
          <p>Não existem postes!</p>
        }

        <div className='button-conteiner'>
          {!searchValue &&
            <Button
              text={'Load More Posts'}
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          }
        </div>
      </section>
    );
  }
};
