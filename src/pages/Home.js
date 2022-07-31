import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import React from "react";
import MenuContainer from "../Components/MenuContainer";
import Header from "../Components/Header";
import "../App.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bottomMenu">
        <ul className="menu">
          <MenuContainer link={"/"} icon={<HomeRounded />} />
          <MenuContainer link={"/chat"} icon={<Chat />} />
          <MenuContainer
            link={"/account"}
            icon={<AccountBalanceWalletRounded />}
          />
          <MenuContainer link={"/fav"} icon={<Favorite />} />
          <MenuContainer link={"/summry"} icon={<SummarizeRounded />} />
          <MenuContainer link={"/settings"} icon={<Settings />} />
        </ul>
      </div>
    </>
  );
};

export default Home;
