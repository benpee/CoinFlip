import Layout from "../components/Layout";
import { useState } from 'react';

export default function Staking() {
    const [input, setInput] = useState({
        status: "locked",
        amount: "",
        days: 7
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setInput({
            ...input, 
            [name]: value
        })
    };

    let daysValue = input.days;
    const rangeStatus = input.status === "unlocked" ? true : false;
    let increment = (input.days * 0.1447).toFixed(3);
    let total = (1.135 * (input.days * 0.1447)).toFixed(3)
    return (
        <Layout>
            <div>
                <div className="text-center pr-4 text-teal-300 p-2 bg-black text-opacity-100">
                    <h2>DEPOSIT</h2>
                </div>
                <div className="text-white text-center">
                    <p>
                        Staking: <a href="https://etherscan.io/0xa29367a3f057F3191b62bd405584a33411892b6" className="text-blue text-opacity-50">
                        0xa29367a3f057F3191b62bd405584a33411892b6</a>
                    </p>
                </div>
                <div>
                    <table className="text-opacity-50 border border-collapse items-center text-center text-blue">
                        <tr className="bg-gray-700">
                            <th>UNLOCKED</th>
                            <th>LOCKED</th>
                        </tr>
                        <tr className="text-white">
                            <td className="mx-10">0</td>
                            <td className="-mx-35">0</td>
                        </tr>
                    </table>                                        
                </div>
                <form>
                    <div className="justify-center mx-40 text-white flex-row content-center">
                        <p><input type="number" placeholder="Amount" name="amount" className="amount p-1 rounded" onChange={handleChange} size={8} disabled  />
                        <div>
                            <input type="radio" className="text-blue" name="status" value="unlocked" checked={input.status === "unlocked"} onChange={handleChange} /> Unlocked <br />
                            <input type="radio" className="text-blue" name="status" value="locked" onChange={handleChange} checked={input.status === "locked"} /> Locked
                            </div>                                                
                        </p>
                        <p> {handleChange} available</p>
                    </div>                    
                    <div className="text-white text-center">
                        <p> 
                            If you choose to lock your stake, the longer you do so, the more boost
                            it will have when calculating rewards. Staking unlocked LP tokens doesn't
                            earn a boost but can be withdrawn at anytime. All stakers regardless of 
                            lockups earn an additional boost the more FRAX becomes algorithmic.
                        </p>
                        <h3 className="text-center">DAYS</h3>
                        <input type="range" name="days"  id="range" disabled={rangeStatus} onChange={handleChange} min="7" max="1025" />
                        <input type="number" className="rangeText mx-3 pl-2 rounded" size={3} disabled value={daysValue} />
                        <br/>
                        <p className="my-5">{increment}x (time) x 1.135x (CR) <br/> <span className="my-2 text-xl">= {total}x (total)</span></p>
                        <br/>
                        <button type="submit" className="text-black my-20 bg-gray-100 rounded-md px-3 py-1" disabled> CONNECT WALLET </button>
                        <a href="docs.frax.finance/staking" target="_blank" className="text-right text-blue">Help</a>
                    </div>
                </form>
            </div>
        </Layout>
    );
}