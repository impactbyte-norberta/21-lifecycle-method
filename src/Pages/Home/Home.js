// import React from 'react';

// class Home extends React.Component {
//     constructor(props, timer) {
//         super(props, timer);
//         this.timer = timer;
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => console.log('hello'), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }

//     render() {
//         return <div>Ada timer di console</div>;
//     }
// }

// export default Home;

/// ==========================
import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const timer = setInterval(() => console.log('hello'), 1000);

        return () => clearInterval(timer);
    }, []);
    return <div>Ada timer di console</div>;
}

export default Home;
