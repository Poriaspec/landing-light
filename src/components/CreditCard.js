import React from 'react'
import Poria from "../assets/poria.png"
import "../styles/CreditCard.css"
import Chip from "../assets/atm-chip.png"
import Paypal from  "../assets/paypal.png"
import Discover from "../assets/discover.jpg"
import Visa from "../assets/visa.png"
import masterCard from "../assets/mastercard.png"



const CreditCard=()=> {


  return (
    <>

    <nav>
        <ul>
            <li><h1>TRIPS</h1></li>
            <li><h1>RECENTLY VIEWED</h1></li>
            <li><h1>BOOKINGS</h1></li>
            <li><img src={Poria} alt='Poria'/></li>
        </ul>
    </nav>

    <hr/>

    <div className='mainHero'>

        <div className='mainHero1'>
            <div className='heroTxt1'>
            <h1>Payment Information</h1>
            <p>Choose your method of payment</p>
            </div>
          

            <div className='creditCard'>

                <h3>CARD NUMBER</h3>
                <h4>4324 5433 9382 1030</h4>

                <div className='atm'>

                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M83.95 115C81.85 114.15 80.35 112.25 80 110C79.75 108.7 80 107.8 82 104.2C89.5 90.7 93.35 75.4499 93.15 59.9999C93.35 44.9999 89.7 30.35 82.5 17.2C81.45 15 80.5 12.9 79.7 10.65C80 8.74995 80.95 6.99995 82.5 5.94995C84.75 4.74995 87.5 4.99995 89.55 6.39995C90.95 8.19995 92.15 9.99995 93.15 12.1C98.5297 22.4044 102.194 33.5167 104 45C105.15 54.05 105.3 63.25 104.45 72.35C102.9 84.05 99.45 95.35 94.15 105.9C90.95 112.3 89.15 115 87.25 115H83.95V115ZM62.15 103.95C59.3 103.15 57.5 100.25 58.1 97.35C58.1 96.75 59.65 94 61.05 91.2C66.95 79.85 69.5 67.0499 68.35 54.2999C67.65 45.1499 65 36.25 60.65 28.2C57.5 21.9 57.3 20.9 59.15 18.2C61.35 15.75 65 15.4 67.7 17.5C71.3 22.8 74.15 28.6 76.25 34.7C82.65 53.65 81.65 74.3 73.45 92.5C69.25 101.95 66.3 105 62.15 103.7V103.95V103.95ZM39.65 92.8C38.7597 92.4004 37.9699 91.8069 37.3384 91.063C36.7069 90.319 36.2497 89.4433 36 88.5C36 87.5 36 86.2 38.25 82.2C41.9154 75.5546 43.8377 68.0891 43.8377 60.5C43.8377 52.9108 41.9154 45.4453 38.25 38.8C35 32.5 35 31.2 37.65 28.8C38.6 27.7 40 27.15 41.5 27.35C44.7 27.35 46.5 28.9 49.2 34.55C53.4513 42.3555 55.6533 51.1119 55.6 59.9999C55.8 69.0499 53.6 78.05 49.25 86C46.55 91.25 45.2 92.5 42.5 92.95C41.55 93.05 40.55 92.95 39.65 92.5V92.8V92.8ZM18.6 82.15C16.95 81.35 15.65 79.9999 15 78.2499C14.5 76.4999 15 74.9999 17 71.7999C19.5 68.3999 20.7 64.1999 20.45 59.9999C20.8 55.7499 19.65 51.5499 17.2 48.0499C16.3701 46.7894 15.6348 45.4691 15 44.1C14.45 40.95 16.55 37.95 20 37.35C22.7 36.85 24.6 38 27.1 41.8C30.6472 47.1979 32.5373 53.5158 32.5373 59.9749C32.5373 66.4341 30.6472 72.752 27.1 78.15C24.55 81.9999 21.65 83.15 18.65 82.15H18.6V82.15Z" fill="white"/>
                </svg>

                <img src={Chip} alt='chip' /> 

                </div>

                <h3>EXPIRATION DATE</h3>

                <h3>03/24</h3>

                <h3>John Doe</h3>

                <div className='masterCard'><img src={masterCard} alt='chip' /> </div>


            </div>

        </div>


        <div className='mainHero2'>

            <div className='hero2Img'>
            <img src={Visa}  alt="visa" />
            <img  src={Discover} alt="discover" />
            <img className='paypal' src={Paypal} alt="paypal" />
            </div>

            <form>
                <div className='form'>

                    <div className='first'>

                        <p>Credit card number</p>
                        <input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />

                        <p>Security code</p>
                        <input type="tel" placeholder='cvv'/>
                    </div>

                    
                    <div className='second'>
                        <p>Expiration date</p>
                        <input type="tel" placeholder="date"/>

                        <p>Postal code</p>
                        <input type="tel" placeholder="input your postal code" />

                    </div>

                </div>
              <div className='mainRadio'>
                <label className='radio'>
                <input type="radio" id='radio'/>
                Use this card for next time purchase
                </label>
            </div>

            <button>Add Card</button>

            </form>

        </div>

    </div>

    <hr className='hr2'/>

    <div className='calculation'>

        <div className='calculationTxt'>
           <h3>Subtotal</h3> 
           <h3>Estimated Tax</h3>
           <h3>Promotional Code: Z4KLMA</h3> 

        </div>

        <div className='calculationFigure'>
            <h3> ₦2,497.00</h3>
            <h3> ₦199.64</h3>
            <h3> ₦-60.00</h3>

        </div>

    </div>

    <hr className='hr3'/>

    <div className='total'>

        <div className='totalTxt'>
            <button>TOTAL PAYMENT</button>
        </div>

        <div className='totalFigure'>
            <h1>TOTAL: ₦2556.64 </h1>
        </div>

    </div>
    
    
    </>
  )
}

export default CreditCard