/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

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

const Profile = () => {
  const MySwal = withReactContent(Swal);
  function saveRecord(){
    MySwal.fire({
      icon: "success",
      title: "Sucesso!!",
      text: "Registro inserido com sucesso!",
    }).then(() => {
      return true;
    });
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
                        <span className="description">Areas</span>
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
                    Estacionamento
                    <span className="font-weight-light"></span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    São Bernardo do Campo
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Modular Company - EstacionAqui!
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    R. Sírius, 370 - Jardim Antares, São Bernardo do Campo - SP,
                    09726-253
                  </div>
                  <hr className="my-4" />
                  <p>
                    Estacionamento utilizado para desenvolvimentos sistemicos.
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
                        <h3 className="mb-0">Cadastrar Area</h3>
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
                                Titulo
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Area demarcada"
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
                                Codigo do Local
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-last-name"
                                placeholder="Codigo"
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
                                <option>Estacionamento</option>
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
                                Titulo
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Setor demarcada"
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
                                Codigo do Local
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-last-name"
                                placeholder="Codigo"
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
                                Area
                              </label>
                              <Input
                                id="exampleSelect"
                                name="status"
                                type="select"
                              >
                                <option>-</option>
                                <option>A</option>
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
                                Numero da Vaga
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Vaga"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Numero do Sensor
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-first-name"
                                placeholder="Sensor da vaga"
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
                                <option>Estacionamento</option>
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
                              >
                                <option>A</option>
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
