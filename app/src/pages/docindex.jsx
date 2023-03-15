
import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import img3 from '../assets/img/03.png';
import img2 from '../assets/img/02.png';
import img1 from '../assets/img/01.png';
import online from '../assets/img/online.jpg';
import female from '../assets/img/female.jpeg';



export class DocIndex extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <Header />
                <section class="patient_home_banner" id="home">
                    <div class="container">
                        <h1>Welcome, Doctor !!</h1>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default DocIndex