import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

const Listing = () => {
  return (
    <>
        <section className='productListingPage'>
            <div className='container'>
                <div className='productListing d-flex'>
                    <Sidebar/>
                    <div className='contentRight'>
                        content
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Listing
