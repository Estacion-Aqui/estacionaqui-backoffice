import { useState, useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  insertDataArea,
  getAllData,
  insertDataSector,
  insertDataSpot } from "variables/apis.js";

const Profile = () => {
  const [area, setarea] = useState({});
  const [sector, setsector] = useState({});
  const [spot, setspot] = useState({});
  const MySwal = withReactContent(Swal);
  const [result, setResult] = useState({
    estab: [],
    area: [],
    sector: [],
    spot: [],
  });
  async function saveRecord() {
    await insertDataArea(area);
    setarea({});
    MySwal.fire({
      icon: "success",
      title: "Sucesso!!",
      text: "Registro inserido com sucesso!",
    }).then(() => {
      return true;
    });
    getAllData().then(function (result) {
      setResult(result);
    });
  }
  async function saveRecordSector() {
    console.log(sector);
    await insertDataSector(sector);
    setsector({});
    MySwal.fire({
      icon: "success",
      title: "Sucesso!!",
      text: "Registro inserido com sucesso!",
    }).then(() => {
      return true;
    });
    getAllData().then(function (result) {
      setResult(result);
    });
  }
  async function saveRecordSpot() {
    await insertDataSpot(spot);
    setspot({});
    MySwal.fire({
      icon: "success",
      title: "Sucesso!!",
      text: "Registro inserido com sucesso!",
    }).then(() => {
      return true;
    });
    getAllData().then(function (result) {
      setResult(result);
    });
  }
  useEffect(() => {
    getAllData().then(function (result) {
      setResult(result);
    });
  });

  function handleChangeTitulo(event){
    area.name = event.target.value;
    setarea(area);
  }
  function handleChangeLocal(event) {
    area.code = event.target.value;
    setarea(area);
  }


  function handleChangeSector(event) {
    sector.name = event.target.value;
    setsector(sector);
  }
  function handleChangeSectorLocal(event) {
    sector.code = event.target.value;
    setsector(sector);

  }
  function handleChangeAreaLocal(event) {
    sector.area = event.target.value;
    setsector(sector);

  }



  function handleChangeTitleSpot(event) {
    spot.title = event.target.value;
  }
  function handleChangeSpotSector(event) {
    spot.sector = event.target.value;
  }
  function handleChangeSpotSensor(event) {
    spot.sensorId = event.target.value;
  }
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        style={{ height: "30px" }}
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Editar
                      </Button>
                      <div>
                        <span className="heading">2</span>
                        <span className="description">Áreas</span>
                      </div>
                      <div>
                        <span className="heading">2</span>
                        <span className="description">Setores</span>
                      </div>
                      <div>
                        <span className="heading">15</span>
                        <span className="description">Vagas</span>
                      </div>
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        style={{ height: "30px" }}
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Sair
                      </Button>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    Estabelecimento
                    <span className="font-weight-light"></span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    São Bernardo do Campo
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Estabelecimento
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    R. Sírius, 370 - Jardim Antares, São Bernardo do Campo - SP,
                    09726-253
                  </div>
                  <hr className="my-4" />
                  <p>
                    Estabelecimento utilizado para desenvolvimentos sistemicos.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-12 mb-5 mb-xl-12" xl="8">
            <div>
              <Col className=" mt-0 order-xl-1" xl="12">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">Cadastrar Área</h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => saveRecord()}
                          size="sm"
                        >
                          Salvar
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Título
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Área demarcada"
                                value={area.name}
                                onChange={handleChangeTitulo}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Código do Local
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-last-name"
                                placeholder="Código"
                                value={area.code}
                                onChange={handleChangeLocal}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Estabelecimento
                              </label>
                              <Input
                                id="exampleSelect"
                                name="status"
                                type="select"
                              >
                                <option>Estabelecimento</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className=" mt-5 order-xl-1" xl="12">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">Cadastrar Setor</h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => saveRecordSector()}
                          size="sm"
                        >
                          Salvar
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Título
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Setor demarcada"
                                type="text"
                                onChange={handleChangeSector}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Código do Local
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-last-name"
                                placeholder="Código"
                                type="text"
                                onChange={handleChangeSectorLocal}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Área
                              </label>
                              <Input
                                id="exampleSelect"
                                name="status"
                                type="select"
                                onChange={handleChangeAreaLocal}
                              >
                                {result.area.map((option) => (
                                  <option value={option.id}>
                                    {option.code}
                                  </option>
                                ))}
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className=" mt-5 order-xl-1" xl="12">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">Cadastrar Vaga</h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => saveRecordSpot()}
                          size="sm"
                        >
                          Salvar
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Número da Vaga
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Vaga"
                                type="text"
                                value={spot.title}
                                onChange={handleChangeTitleSpot}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Número do Sensor
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Sensor da vaga"
                                type="text"
                                value={spot.sensorId}
                                onChange={handleChangeSpotSensor}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Estabelecimento
                              </label>
                              <Input
                                id="exampleSelect"
                                name="status"
                                type="select"
                              >
                                <option>Estabelecimento</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Setor
                              </label>
                              <Input
                                id="exampleSelect"
                                name="status"
                                type="select"
                                value={spot.sector}
                                onChange={handleChangeSpotSector}
                              >
                                {result.sector.map((option) => (
                                  <option value={option.id}>
                                    {option.code}
                                  </option>
                                ))}
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </Col>
          {/* <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Cadastrar Estabelecimento</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Salvar
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="First name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address *
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description *
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Profile;
