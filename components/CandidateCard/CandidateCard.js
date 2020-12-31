import React, {useState, useEffect} from "react";
import Link from "next/link";
import "./CandidateCard.css";
function CandidateCard({image, name, id, actions, status, idx}) {
    const [userStatus, setuserStatus] = useState(status);
    useEffect(() => {
        setuserStatus(status);
    }, [status]);
    const handleShortlist = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        data[idx].status = "Shortlisted";
        localStorage.setItem("data", JSON.stringify(data));
        setuserStatus("Shortlisted");
    };
    const handleReject = () => {
        const data = JSON.parse(localStorage.getItem("data"));
        data[idx].status = "Rejected";
        localStorage.setItem("data", JSON.stringify(data));
        setuserStatus("Rejected");
    };
    return (
        <Link href={`/${id}`}>
            <div className="candidate-card-cont">
                <div className="candidate-card">
                    <img src={image} alt="" />
                    <p>{name}</p>
                </div>
                {actions && (
                    <div className="w-100 d-flex justify-between align-center action-btns">
                        {userStatus === "Shortlisted" ? (
                            <button className="btn btn-md" disabled>
                                Shortlisted
                            </button>
                        ) : userStatus === "Rejected" ? (
                            <button disabled className="btn btn-md">
                                Rejected
                            </button>
                        ) : (
                            <>
                                <button
                                    className="btn btn-md"
                                    onClick={handleShortlist}
                                >
                                    Shortlist
                                </button>
                                <button
                                    onClick={handleReject}
                                    className="btn btn-md"
                                >
                                    Reject
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </Link>
    );
}

export default CandidateCard;
