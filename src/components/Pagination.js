import React from 'react';
import {NavLink} from 'react-router-dom';

const Pagination = ({currentPage, pages, getBusiness}) => {
    let prevPage = parseInt(currentPage, 10) - 1;
    let nextLink = parseInt(currentPage, 10) + 1;

    const nextActivebuttonStyle = {
        "paddingLeft": "20px",
        "paddingRight": "20px"
    }

    const nextDeactivebuttonStyle = {
        "paddingLeft": "30px",
        "paddingRight": "30px"
    }

    return (
        <div className="text-center">
            <nav>
                <ul className="pager">
                    <li>
                        {prevPage > 0 ? // Disable previous page link if showing the first page
                            <NavLink  to={'/businesslist/' + prevPage}>
                                <span onClick={() => getBusiness(prevPage)}>
                                    Previous
                                </span>
                            </NavLink>
                            :
                            <span>Previous</span>
                        }
                    </li>
                    {' Page ' + currentPage + ' of ' + pages + ' '}
                    <li>
                        {nextLink <= pages ? // Disable next page link if showing the last page
                            <NavLink to={'/businesslist/' + nextLink}>
                                <span id="spanPrevlink"  style={nextActivebuttonStyle} className="text-center" onClick={() => getBusiness(nextLink)}>
                                    Next
                                </span>
                            </NavLink>
                            :
                            <span style={nextDeactivebuttonStyle}>Next</span>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Pagination;