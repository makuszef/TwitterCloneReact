import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SidebarOption from "./SidebarOption";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Button } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twittericon" />
      <SidebarOption Icon={HomeIcon} text={"Home"} active />
      <SidebarOption Icon={SearchIcon} text={"Explore"} />
      <SidebarOption Icon={NotificationsNoneIcon} text={"Notification"} />
      <SidebarOption Icon={MailOutlineIcon} text={"Messanges"} />
      <SidebarOption Icon={BookmarkBorderOutlinedIcon} text={"Bookmarks"} />
      <SidebarOption Icon={ListAltOutlinedIcon} text={"Lists"} />
      <SidebarOption Icon={PermIdentityOutlinedIcon} text={"Profle"} />
      <SidebarOption Icon={MoreHorizOutlinedIcon} text={"More"} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
