import React from 'react';
import "./Summarizer.css";
import Textarea from '../Textarea/Textarea';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';
import FAQs from '../FAQ/FAQ';
import Premium from '../Premium/Premium';

function Summarizer() {
    return (
        <>
            <div className='SummarizerContainer'>
                <div className='HEADING'>
                    <h1>Summarizer</h1>
                </div>
                <div className='Paraphaser-textarea'>
                    <Textarea/>
                    <Premium/>
                    <Table/>
                    <FAQs/>
                </div>
                <div className='Paraphaser-footer'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Summarizer;