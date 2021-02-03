import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function BoardMember({detail}) {

    return(
        <section className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/about">About Us</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{detail.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h1>{detail.name}</h1>
                    <hr />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-1"></div>
                <div className="col-7">
                    <p>{detail.bio}</p>
                </div>
                <div className="col-3 text-center">
                    <p>{detail.bioImage}</p>
                    <p className="boardMemberQuote">
                        {detail.bioQuote}
                    </p>
                </div>
                <div className="col-1"></div>
            </div>
        </section>
    );
}

export default BoardMember;