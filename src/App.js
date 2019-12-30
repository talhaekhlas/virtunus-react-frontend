import React from 'react';
import logo from './assets/images/logo.png';
import todoImg from "./assets/images/to-do-icon.png"

import './assets/less/master.less'
import './assets/css/bootstrap.css'
import './assets/css/fontawesome.css'



function App() {
  return (
    <div className="virtunus__page_wrapper" style={{background:'#f1f3f4'}}>
		
		<div className="virtunus__sidemenu_area">
			<div className="side_logo_area">
				<img src="assets/images/user-profile.png" alt=""/>
				<div className="side_user_info">
					<div className="user_info">
						<h5>Ashraf Hossain</h5>
						<p>UI/UX Designer</p>
					</div>
					<div className="user-icon">
						<i className="fas fa-bell"></i>
						<i className="fas fa-cog"></i>
						<i className="fas fa-search"></i>
					</div>
				</div>

			</div>
			<div className="side_nav">
				<nav>
					<ul>
						<li className="shopping">
							<a href="#">
								<img src="assets/images/shop-icon.png" alt=""/>
								<span>Shopping</span>
							</a>
						</li>
						<li className="to-do">
							<a href="javascript:void(0)">
								<img src="assets/images/todo-icon.png" alt=""/>
								<span>To-do</span>
								<i className="fas fa-angle-down"></i>
							</a>
							
							<ul className="dropdown_menu">
								<li>
									<a href="todo-list.html">
										<img src="assets/images/d-icon.png" alt=""/>
										<span>To-do List</span>
									</a>
								</li>
								<li>
									
									<a href="#">
										<img src="assets/images/d-icon.png" alt=""/>
										<span>Today</span>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="assets/images/d-icon.png" alt=""/>
										<span>Save List</span>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="assets/images/d-icon.png" alt=""/>
										<span>Project</span>
										<i className="fas fa-angle-down"></i>
									</a>
									<ul className="dropdown_menu">
										<li>
											
											<a href="#">
												<span className="dot"></span>
												<span>Family</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span className="dot travel"></span>
												<span>Travel</span>
											</a>
										</li>
										<li>
											<a href="#">
												<span className="dot work"></span>
												<span>Work</span>
											</a>
										</li>
										<li>
											<a href="#">
												<i className="far fa-plus-square"></i>
												<span>Create a New List</span>
											</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">
										<img src="assets/images/d-icon.png" alt=""/>
										<span>Priotiry</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="shopping">
							<a href="#">
								<img src="assets/images/shop-icon.png" alt=""/>
								<span>Shopping</span>
							</a>
						</li>
						<li className="contact">
							<a href="#">
								<img src="assets/images/contact-icon2.png" alt=""/>
								<span>Contact</span>
							</a>
						</li>
						<li className="account">
							<a href="#">
								<img src="assets/images/account-icon2.png" alt=""/>
								<span>Account</span>
							</a>
						</li>
						<li className="family">
							<a href="#">
								<img src="assets/images/family-icon2.png" alt=""/>
								<span>Family</span>
							</a>
						</li>
						<li className="health">
							<a href="#">
								<img src="assets/images/health-icon2.png" alt=""/>
								<span>Health</span>
							</a>
						</li>
						
					</ul>
				</nav>
			</div>
		</div>
		
		<div className="virtunus__page_content">
			<header className="top_header_area">
				<div className="toggle_icon">
					<span><img src="assets/images/toggle-icon.png" alt=""/></span>
				</div>
				<div className="header_logo">
					<img src={logo} alt="Logo"/>
				</div>
				<div className="user-profile">
					
					<ul>
						<li>
							<a href="#">
								<i className="fas fa-plus-circle"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fas fa-search"></i>
							</a>
						</li>
						<li className="notification">
							<a href="#">
								<span className="n-number">3</span>
								<i className="fas fa-bell"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fas fa-ellipsis-h"></i>
							</a>
							<div className="dropdown-menu">
								<div className="user-profile-head">
									<div className="profle-thumb">
										<img src="assets/images/user-profile.png" alt=""/>
									</div>
									<div className="profile-text">
										<h5>John Doe</h5>
										<span>john@gmail.com</span>
									</div>
								</div>
								<a href="#" className="dropdown-item">
									<i className="fas fa-user"></i>
									My Profile
								</a>
								<a href="#" className="dropdown-item">
									<i className="fas fa-user"></i>
									Message
								</a>
								<a href="#" className="dropdown-item">
									<i className="fas fa-user"></i>
									Settings
								</a>
								<a href="#" className="dropdown-item">
									<i className="fas fa-user"></i>
									Support
								</a>
								<a href="#" className="dropdown-item">
									<i className="fas fa-user"></i>
									Sign-out
								</a>
							</div>
						</li>
					</ul>
				</div>
			</header>
			<div className="main-content">
				<div className="todo_list_item">
					<div className="single_todo_box_list todo_box">
						<a href="#">
							<div className="icon">
								<img src={todoImg} alt="To-Do"/>
							</div>
							<h3>To-do</h3>
						</a>
					</div>
					<div className="single_todo_box_list shopping_box">
						<a href="#">
							<div className="icon">
								<img src="assets/images/shopping-icon.png" alt="Shopping"/>
							</div>
							<h3>Shopping</h3>
						</a>
					</div>
					<div className="single_todo_box_list contact_box">
						<a href="#">
							<div className="icon">
								<img src="assets/images/contact-icon.png" alt="Contact"/>
							</div>
							<h3>Contact</h3>
						</a>
					</div>
					<div className="single_todo_box_list account_box">
						<a href="#">
							<div className="icon">
								<img src="assets/images/account-icon.png" alt="Account"/>
							</div>
							<h3>Account</h3>
						</a>
					</div>
					<div className="single_todo_box_list health_box">
						<a href="#">
							<div className="icon">
								<img src="assets/images/health-icon.png" alt="Health"/>
							</div>
							<h3>Health</h3>
						</a>
					</div>
					<div className="single_todo_box_list family_box">
						<a href="#">
							<div className="icon">
								<img src="assets/images/family-icon.png" alt="Family"/>
							</div>
							<h3>Family</h3>
						</a>
					</div>
				</div>
			</div>
		</div>
		
	</div>
  );
}

export default App;
