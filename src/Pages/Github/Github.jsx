import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const Card = styled.div`
    width: 200px;

    & img {
        width: 100%;
    }
`;

export default function Github() {
    const [datas, setDatas] = useState([]);
    const fetchData = async () => {
        const url = "https://api.github.com/users";
        const response = await fetch(url);
        const result = await response.json();

        setDatas(result);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <CardList>
                {datas.map((item) => {
                    return (
                        <Card key={item.login}>
                            <p>{item.login}</p>
                            <img src={item.avatar_url} alt="avatar" />
                            <Link to={`/github-detail/${item.login}`}>Detail</Link>
                        </Card>
                    );
                })}
            </CardList>
        </div>
    );
}
