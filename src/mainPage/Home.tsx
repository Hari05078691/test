import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, lastIndexApiCall } from "../redux/apiCall/userActions";
import "./Home.css";

const Home = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<any>();
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(1);
  const { userData, totalPages } = useSelector((state: any) => state);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (currentPageIndex <= totalPages) {
        fetchUserData(
          currentPageIndex,
          userData,
          dispatch,
          setCurrentPageIndex
        );
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPageIndex]);

  useEffect(() => {
    lastIndexApiCall(userData, currentPageIndex, dispatch, setCurrentPageIndex);
  }, []);

  return (
    <div ref={gridRef} className="Body">
      {Array.isArray(userData) &&
        userData.map((user: any) => (
          <div key={user.id} className="secondary-body">
            <Card
              title={user.first_name}
              subTitle={user.last_name}
              content={user.email}
              userImage={user.avatar}
            />
          </div>
        ))}
    </div>
  );
};

export default Home;
