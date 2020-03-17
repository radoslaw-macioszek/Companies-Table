import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	loadTableDataAction,
	loadTableValueAction
} from "../../state/table/table.reducer";
import { Link } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.tableReducer.loading);

	const myData = useSelector(state => state.tableReducer.data);
	const myValue = useSelector(state => state.tableReducer.values);

	const [currentPage, setCurrentPage] = useState(1);
	const [companyPerPage] = useState(20);

	const indexOfLastCompany = currentPage * companyPerPage;
	const indexOfFirstCompany = indexOfLastCompany - companyPerPage;
	const currentCompanies = myValue.slice(
		indexOfFirstCompany,
		indexOfLastCompany
	);

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(myValue.length / companyPerPage); i++) {
		pageNumbers.push(i);
	}

	const [searchTerm, setSearchTerm] = useState("");

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};

	useEffect(() => {
		dispatch(loadTableDataAction());
	}, [dispatch]);

	useEffect(() => {
		if (myData.length > 0) {
			dispatch(loadTableValueAction());
		}
	}, [dispatch, myData]);

	return isLoading ? (
		<div className="relative-position">
			<div className="loading"> loading.. </div>
		</div>
	) : (
		<div className="form">
			<div className="header small-margin-bottom">
				<h1>Companies Table</h1>
			</div>
			<div className="form-input small-margin-bottom">
				<input
					className="input"
					type="text"
					placeholder="Search.."
					value={searchTerm}
					onChange={handleChange}
				/>
			</div>
			<div className="small-margin-bottom">
				<nav>
					{pageNumbers.map(number => (
						<a
							className="btn"
							onClick={() => setCurrentPage(number)}
							href="#"
							key={number}
						>
							{number}
						</a>
					))}
				</nav>
			</div>
			<div className="table">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>City</th>
							<th>Total Value</th>
						</tr>
					</thead>
					<tbody>
						{currentCompanies &&
							currentCompanies
								.filter(value =>
									value.name.toLowerCase().includes(searchTerm.toLowerCase())
								)
								.map(data => {
									return (
										<tr key={data.id}>
											<td>{data.id}</td>
											<td>
												<Link to={`/company/${data.id}`} key={data.id}>
													{data.name}
												</Link>
											</td>
											<td>{data.city}</td>
											<td>{Math.round(data.total)}</td>
										</tr>
									);
								})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Home;
