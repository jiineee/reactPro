import { Fragment, useState } from "react"
import { Outlet } from "react-router-dom"
import $ from 'jquery';
import './HeaderFooter.css'
import BellIcon from "../img/BellIcon";
import Down from "../img/ChevronDownIcon";
import HomeIcon from "../img/HomeIcon";
import FileTextIcon from "../img/FileTextIcon";
import BarChartIcon from "../img/BarCartIcon";
import BoxIcon from "../img/BoxIcon";


function HeaderFooterEn() {

    const handleClick = (e) => {
        $(e.currentTarget).toggleClass("active")
        $(e.currentTarget).next().toggleClass("in")
    }
    return (


        <Fragment>
             <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
            <div className="header">
                <nav className="navbar top-navbar navbar-expand-lg navbar-light">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <a href="index.html"> 승용 엔지니어 A팀 </a>
                        </div>



                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav float-end">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle pl-md-3 position-relative" href="javascript:void(0)" id="bell" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>
                                        <BellIcon className="feather feather-bell svg-icon" />
                                    </span>
                                    <span className="badge text-bg-primary notify-no rounded-circle">5</span>

                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./img/profile-pic.jpg" alt="user" className="rounded-circle" width="40" />
                                    <span className="ms-2 d-none d-lg-inline-block">
                                        <span></span>
                                        <span className="text-dark">백승용</span>
                                        <Down />
                                    </span>
                                </a>
                            </li>
                        </ul>


                    </div>
                </nav>


            </div>

            <aside className="left-sidebar" data-sidebarbg="skin6">
                <div className="scroll-sidebar ps-container ps-theme-default" data-sidebarbg="skin6" data-ps-id="49c8c710-23b9-874c-d968-f904306f1d70">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav" className="in">
                            <li className="sidebar-item selected">
                                <a className="sidebar-link sidebar-link active" href="index.html" aria-expanded="false">
                                    <HomeIcon />
                                    <span className="hide-menu">메인페이지</span>
                                </a>
                            </li>
                            <li className="list-divider"></li>
                            <li className="nav-small-cap">
                                <span className="hide-menu"></span>
                            </li>

                            <li className="sidebar-item">
                                <a className='sidebar-link has-arrow ' href="javascript:void(0)" onClick={handleClick}  aria-expanded="false">
                                    <FileTextIcon />
                                    <span className="hide-menu hide-list ">엔지니어 일정 보기</span>
                                </a>
                                <ul aria-expanded="false" className="collapse first-level base-level-line">
                                    <li class="sidebar-item">
                                        <a href="form-inputs.html" class="sidebar-link">
                                            <span class="hide-menu hide-list"> 달력보기 </span>
                                        </a>

                                    </li>
                                    <li class="sidebar-item">
                                        <a href="form-inputs.html" class="sidebar-link">
                                            <span class="hide-menu hide-list"> 상세보기 </span>
                                        </a>

                                    </li>
                                </ul>

                            </li>
                            <li className="sidebar-item">
                            <a className='sidebar-link has-arrow' href="javascript:void(0)" onClick={handleClick} aria-expanded="false">
                                    <BarChartIcon/>
                                    <span className="hide-menu hide-list" >공지사항</span>
                                </a>
                                <ul aria-expanded="false" className="collapse first-level base-level-line">
                                    <li class="sidebar-item">
                                        <a href="form-inputs.html" class="sidebar-link">
                                            <span class="hide-menu hide-list"> 공지사항 보기 </span>
                                        </a>

                                    </li>
                                 </ul>   

                            </li>
                            <li className="sidebar-item">
                            <a className= 'sidebar-link has-arrow' href="javascript:void(0)" onClick={handleClick} aria-expanded="false">
                                    <BoxIcon/>
                                    <span className="hide-menu hide-list" >문의사항</span>
                                </a>
                                <ul aria-expanded="false" className="collapse first-level base-level-line">
                                    <li class="sidebar-item">
                                        <a href="form-inputs.html" class="sidebar-link">
                                            <span class="hide-menu hide-list"> 문의사항 목록 </span>
                                        </a>
                                        <a href="form-inputs.html" class="sidebar-link">
                                            <span class="hide-menu hide-list"> 문의사항 작성하기</span>
                                        </a>
                                    </li>
                                 </ul>   

                            </li>
                        </ul>

                    </nav>


                </div>

            </aside>

            <Outlet/>

            </div>
        </Fragment>



    )

}

export default HeaderFooterEn