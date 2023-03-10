import React, { useState, useEffect } from 'react';
import { Posts } from '../../Posts';

import { loadPosts } from '../../../utils/load-posts';

import './styles.css';
import { Button } from '../../Button/Button';
import { TextInput } from '../../TextInput';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setpage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const handleloadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    setPosts(posts);
    setpage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  }

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    })
    : posts;

  useEffect(() => {
    handleloadPosts();
    console.log('oi')
  }, []);

  return (
    <section className='conteiner'>
      {!!searchValue &&
        <>
          <h1>Search value: {searchValue}</h1> <br /> <br />
        </>
      }

      <TextInput
        handleChange={handleChange}
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
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        }
      </div>
    </section>
  );

};

// export class Home extends Component {
//   state = {
//     couter: 0
//   }

//   handleClick = () => {
//     const { couter } = this.state

//     this.setState((prevState, prevProps) => {

//       return { couter: prevState.couter + prevProps.numberToIncrement}
//     }, () => {
//       console.log('POST', this.state.couter)
//     })
//   }

//   render() {
//     return (
//       <div className='conteiner'>
//         <h1>{this.state.couter}</h1>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }
