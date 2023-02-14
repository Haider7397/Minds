
import { useEffect, useState } from "react"

export default function AdnanPage() {

    const [formVal, setFormVal] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        children: "",
        gender: "",
        street: "",
        houseNumber: "",
        zip: "",
        city: "",
        street2: "",
        houseNumber2: "",
        zip2: "",
        city2: ""
    })

    const [users, setUsers] = useState([])
    const [data, setData] = useState([])
    const [tempdata, setTempData] = useState([])


    const handleChange = event => {
        const { name, value } = event.target;
        setFormVal({ ...formVal, [name]: value })
    }


    const save = () => {
        console.log(formVal)
        setUsers([...users, formVal])
    }

    useEffect(function () {
        setData(users)
    }, [users])



    return (
        <div className="container">
            <div className="">
                <div className="row" style={{ paddingBottom: '50px' }}>
                    <div className="col-12 mx-auto">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body">
                                <div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First Name</th>
                                                <th scope="col">Last Name</th>
                                                <th scope="col">Date of Birth</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Professional Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                data.map((item, index) =>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{item.firstName}</td>
                                                        <td>{item.lastName}</td>
                                                        <td>{item.dob}</td>
                                                        <td>{item.gender}</td>
                                                        <td>{item.street} {item.houseNumber}, {item.zip} {item.city}</td>
                                                        <td>{item.street2} {item.houseNumber2}, {item.zip2} {item.city2}</td>
                                                    </tr>
                                                )
                                            }
                                            <tr>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingBottom: '50px' }}>
                    <div className="col-12 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <form>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="date" className="form-control" id="dob" name="dob" placeholder="Date of Birth" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" id="children" name="children" placeholder="Number of Children" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <select className="form-control" id="gender" name="gender" onChange={handleChange}>
                                                        <option value="">Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="others">Others</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <h5>Private Address</h5>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="street" name="street" placeholder="Street" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="houseNumber" name="houseNumber" placeholder="houseNumber" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="zip" name="zip" placeholder="zip" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="city" name="city" placeholder="city" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <h5>Professional Address</h5>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="street2" name="street2" placeholder="Street" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="houseNumber2" name="houseNumber2" placeholder="houseNumber" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="zip2" name="zip2" placeholder="zip" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ paddingBottom: '10px' }}>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="city2" name="city2" placeholder="city" onChange={handleChange} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttonPosition">
                                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => save()}>Start</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 