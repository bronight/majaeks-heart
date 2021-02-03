import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function ContactUs() {
    return(
        <main className="container">
            <section className="row">
                <div className="col text-center">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h1>Contact Us</h1>
                </div>
            </section>
        </main>
    );
}

export default ContactUs