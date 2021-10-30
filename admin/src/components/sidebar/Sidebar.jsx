import { List } from '@material-ui/core'
import { LineStyle, Timeline, TrendingUp,PermIdentity,Storefront,AttachMoney,BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report, PlayCircleOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './sidebar.scss'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/">
                                <LineStyle className="sidebarIcon"/>
                                Home 
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics 
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales 
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/users">
                                <PermIdentity className="sidebarIcon"/>
                                Users 
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/movies">
                                <PlayCircleOutline className="sidebarIcon"/>
                                Movies 
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/lists">
                              <List  className="sidebarIcon"/>
                              Lists 
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Transactions 
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail 
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/>
                            Feedback 
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            Manage 
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics 
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Reports 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
