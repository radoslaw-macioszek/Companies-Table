import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MyResponsiveBar from "./../../components/graph";

const Company = () => {
	const isLoading = useSelector(state => state.tableReducer.loading);

	const { companyId } = useParams();
	const parsedCompanyId = parseInt(companyId);

	const companies = useSelector(state =>
		state.tableReducer.values.filter(firm => {
			return firm.id === parsedCompanyId;
		})
	);

	const [startingDate, setStartingDate] = useState("");
	const [endingDate, setEndingDate] = useState("");

	const handleStartingChange = event => {
		setStartingDate(event.target.value);
	};
	const handleEndingChange = event => {
		setEndingDate(event.target.value);
	};
	const startTime = new Date(startingDate).getTime();
	const endTime = new Date(endingDate).getTime();

	const checkTotal = companies[0].incomes
		.filter(income => {
			const incomeDate = new Date(income.date);
			if (
				incomeDate.getTime() >= startTime &&
				incomeDate.getTime() <= endTime
			) {
				return true;
			}
			return false;
		})
		.reduce((sum, income) => {
			return sum + parseFloat(income.value);
		}, 0);

	const checkAverage1 = companies[0].incomes.filter(income => {
		const incomeDate = new Date(income.date);
		if (incomeDate.getTime() >= startTime && incomeDate.getTime() <= endTime) {
			return true;
		}
		return false;
	});

	const checkAverage =
		checkAverage1.reduce((sum, income) => {
			return sum + parseFloat(income.value);
		}, 0) / checkAverage1.length;

	const data = companies.map(company => {
		return Object.keys(company.previousYear).map(month => {
			return {
				previousYear: month,
				[month]: company.previousYear[month]
			};
		});
	});

	const data2 = companies.map(company => {
		return Object.keys(company.currentYear).map(month => {
			return {
				currentYear: month,
				[month]: company.currentYear[month]
			};
		});
	});

	return isLoading ? (
		<div className="relative-position">
			<div className="loading"> loading.. </div>
		</div>
	) : (
		<div className="form">
			<div className="header small-margin-bottom">
				{companies.map(companyName => {
					return (
						<h1 key={companyName.name}>
							<span>Company:</span>
							<span className="sub">{companyName.name}</span>
						</h1>
					);
				})}
			</div>
			<form className="data-form-input small-margin-bottom">
				<h3 className="smaller-margin-bottom">Select searching range</h3>
				<h3>
					From:
					<input
						className="data-input"
						type="date"
						value={startingDate}
						onChange={handleStartingChange}
					/>
					To:
					<input
						className="data-input"
						type="date"
						value={endingDate}
						onChange={handleEndingChange}
					/>
				</h3>
			</form>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>City</th>
						<th>Total Incomes</th>
						<th>Average Incomes</th>
						<th>Last Month Incomes</th>
						<th>Selected Date Total</th>
						<th>Selected Date Average</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{companies[0].id}</td>
						<td>{companies[0].name}</td>
						<td>{companies[0].city}</td>
						<td>{companies[0].total}</td>
						<td>{companies[0].average}</td>
						<td>{companies[0].lastMonth}</td>
						<td>{Math.round(checkTotal)}</td>
						<td>{isNaN(checkAverage) ? 0 : Math.round(checkAverage)}</td>
					</tr>
				</tbody>
			</table>
			<div className="chart">
				<label>2019</label>
				<MyResponsiveBar data={data[0]} name={"previousYear"} />
			</div>
			<div className="chart">
				<label>2020</label>
				<MyResponsiveBar data={data2[0]} name={"currentYear"} />
			</div>
		</div>
	);
};

export default Company;
