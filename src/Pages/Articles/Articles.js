// import React, { Component } from 'react';

// class Articles extends Component {
//     state = {
//         articles: [],
//         pet: 'kucing',
//     };

//     handleClick = () => {
//         this.setState({ pet: 'burung' });
//     };

//     componentDidMount() {
//         console.log('componentDidMount');
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((results) => this.setState({ articles: results }));
//     }

//     // componentDidUpdate(prevProps, prevState) {
//     //     if (prevState !== this.state.pet) {
//     //         console.log('componentDidUpdate');
//     //         document.getElementById('petEmoji').innerHTML = '🐦';
//     //     }
//     // }

//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//     }

//     render() {
//         console.log(this.state.pet);
//         console.log(this.state.articles);
//         return (
//             <div>
//                 <h1>Hewan peliharaanku adalah: {this.state.pet}</h1>
//                 <p>
//                     <span id='petEmoji' role='img' aria-label='emoji'>
//                         🐱
//                     </span>
//                 </p>

//                 <article>
//                     {this.state.articles.map((article) => (
//                         <li key={article.id}>{article.title}</li>
//                     ))}
//                 </article>

//                 <button onClick={this.handleClick}>Ubah hewan</button>
//             </div>
//         );
//     }
// }

// export default Articles;

// =========================

import React, { useEffect, useState } from 'react';

function Articles() {
    const [articles, setArticles] = useState([]);

    //componentDidMount;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((results) => setArticles(results));
    }, []);

    //componentDidUpdate;
    useEffect(() => {
        document.querySelector('article').innerHTML = 'tes';
    }, [articles]);

    return (
        <article>
            {articles.map((article) => (
                <li key={article.id}>{article.title}</li>
            ))}
        </article>
    );
}

export default Articles;
