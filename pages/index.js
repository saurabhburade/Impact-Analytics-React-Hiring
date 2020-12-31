import Head from "next/head";
import {useState, useEffect} from "react";
import "../styles/Home.module.css";
import CandidateCard from "../components/CandidateCard/CandidateCard";
import Header from "../components/Header/Header";
export default function Home() {
    const [data, setdata] = useState([]);
    const [searchInput, setsearchInput] = useState("");
    useEffect(() => {
        fetch(
            "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
            {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    Host: "s3-ap-southeast-1.amazonaws.com",
                },
            }
        )
            .then(res => res.json())
            .then(d => {
                if (!localStorage.getItem("data")) {
                    setdata(d);
                    localStorage.setItem("data", JSON.stringify(d));
                }else{
                    setdata(JSON.parse(localStorage.getItem("data")));
                }
                
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const handleSearch = () => {
        if (!!searchInput.trim()) {
            const found = data.find(element => element.name === searchInput);
            if (!!found) {
                setdata([found]);
            } else {
                alert("No Data Found");
            }
        } else {
            alert("No Data Found");
        }
    };
    return (
        <>
            <Head>
                <title>Impact Analytics</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="main">
                <div className="w-100 d-flex justify-center search-cont">
                    <input
                        type="text"
                        className="w-100"
                        value={searchInput}
                        onChange={e => setsearchInput(e.target.value)}
                    />
                    <button className="btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <div className="w-100 d-flex flex-wrap ">
                    {data.map((element,idx) => {
                        return (
                            <CandidateCard
                                key={element.id}
                                image={element.Image}
                                name={element.name}
                                id={element.id}
                                image={element.Image}
                                status={element.status}
                                idx={idx}
                                actions={true}
                                key={element.id}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
