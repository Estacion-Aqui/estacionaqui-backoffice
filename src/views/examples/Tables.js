
import { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  Container,
  Row
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { getAllData, deleteRow } from "variables/apis.js";

const Tables = () => {
  const [result, setResult] = useState(null);

  function deleteObject(e, object, ids){
    e.preventDefault();
    deleteRow(object, ids).then(function () {      
      getAllData().then(function (result) {
        setResult(result);
      });
    });
  }

  useEffect(() => {
    getAllData().then(function(result){
      setResult(result);
    });
  });
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table Estabelecimentos */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Estabelecimentos</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Localização</th>
                    <th scope="col">Status</th>
                    <th scope="col">Vagas</th>
                    <th scope="col">Vagas Ocupadas</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {result == null ? (
                    <> </>
                  ) : (
                    result.estab.map((val) => (
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <a
                              className="avatar rounded-circle mr-3"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              {val.type === "open" ? (
                                <img
                                  alt="..."
                                  src={
                                    require("../../assets/img/theme/openSpot.png")
                                      .default
                                  }
                                />
                              ) : (
                                <img
                                  alt="..."
                                  src={
                                    require("../../assets/img/theme/angular.png")
                                      .default
                                  }
                                />
                              )}
                            </a>
                            <Media>
                              <span className="mb-0 text-sm">{val.title}</span>
                            </Media>
                          </Media>
                        </th>
                        <td>
                          {val.latitude};{val.longitude}
                        </td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            {val.type === "open" ? (
                              <i className="bg-success" />
                            ) : (
                              <i className="bg-danger" />
                            )}
                            {val.type === "open" ? "Aberto" : "Fechado"}
                          </Badge>
                        </td>
                        <td>{val.quantitySpots}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">{val.percentSpot}%</span>
                            <div>
                              <Progress
                                max="100"
                                value={val.percentSpot}
                                barClassName={
                                  val.percentSpot < 50
                                    ? "bg-success"
                                    : "bg-danger"
                                }
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right> 
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) =>
                                  deleteObject(e, "places", val.id)
                                }
                              >
                                Excluir
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
                {/* <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/openSpot.png")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Golden Square Shopping
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>-23.682962;-46.557787</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Aberto
                      </Badge>
                    </td>
                    <td>5</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "places", "2")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../../assets/img/theme/openSpot.png")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Wall Street Business
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>-23.682962;-46.557787</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Aberto
                      </Badge>
                    </td>
                    <td>10</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">10%</span>
                        <div>
                          <Progress
                            max="100"
                            value="10"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "places", "2")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody> */}
              </Table>
            </Card>
          </div>
        </Row>
        {/* Dark table Areas*/}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Areas</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Nome do Estabelecimento</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">Vagas</th>
                    <th scope="col">Vagas Ocupadas</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {result == null ? (
                    <> </>
                  ) : (
                    result.area.map((val) => (
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">{val.name}</span>
                            </Media>
                          </Media>
                        </th>
                        <td>{val?.placeData?.title}</td>
                        <td>{val.code}</td>
                        <td>{val.quantitySpots}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">{val.percentSpot}%</span>
                            <div>
                              <Progress
                                max="100"
                                value={val.percentSpot}
                                barClassName={
                                  val.percentSpot < 50
                                    ? "bg-success"
                                    : "bg-danger"
                                }
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right> 
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) =>
                                  deleteObject(e, "areas", val.id)
                                }
                              >
                                Excluir
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
                {/* <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Area Coberta</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Golden Square Shopping</td>
                    <td>A23</td>
                    <td>5</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "areas", "2")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Area Piso 1</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Wall Street Business</td>
                    <td>A1</td>
                    <td>10</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">10%</span>
                        <div>
                          <Progress
                            max="100"
                            value="10"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "areas", "2")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody> */}
              </Table>
            </Card>
          </div>
        </Row>
        {/* Dark table Setores*/}
        <Row className="mt-5">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Setores</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Nome do Estabelecimento</th>
                    <th scope="col">Nome do Area</th>
                    <th scope="col">Vagas</th>
                    <th scope="col">Vagas Ocupadas</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {result == null ? (
                    <> </>
                  ) : (
                    result.sector.map((val) => (
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">{val.name}</span>
                            </Media>
                          </Media>
                        </th>
                        <td>{val?.placeData?.title}</td>
                        <td>
                          {val?.areaData?.title} - {val.code}
                        </td>
                        <td>{val.quantitySpots}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">{val.percentSpot}%</span>
                            <div>
                              <Progress
                                max="100"
                                value={val.percentSpot}
                                barClassName={
                                  val.percentSpot < 50
                                    ? "bg-success"
                                    : "bg-danger"
                                }
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right> 
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) =>
                                  deleteObject(e, "sectors", val.id)
                                }
                              >
                                Excluir
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
                {/* <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Setor A23-1</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Golden Square Shopping</td>
                    <td>Area Coberta - A23</td>
                    <td>5</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "sectors", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Setor A1-1</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Wall Street Business</td>
                    <td>Area Piso 1 - A1</td>
                    <td>10</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">10%</span>
                        <div>
                          <Progress
                            max="100"
                            value="10"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "sectors", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody> */}
              </Table>
            </Card>
          </div>
        </Row>
        {/* Dark table Areas*/}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Vagas</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Vaga</th>
                    <th scope="col">Setor</th>
                    <th scope="col">Area</th>
                    <th scope="col">Estabelecimento</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {result == null ? (
                    <> </>
                  ) : (
                    result.spot.map((val) => (
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">{val.title}</span>
                            </Media>
                          </Media>
                        </th>
                        <td>{val?.sectorData?.title}</td>
                        <td>{val?.areaData?.title}</td>
                        <td>{val?.placeData?.title}</td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i
                              className={
                                val.status ? "bg-success" : "bg-danger"
                              }
                            />
                            {val.status ? "Livre" : "Ocupado"}
                          </Badge>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right> 
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) =>
                                  deleteObject(e, "spots", val.id)
                                }
                              >
                                Excluir
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
                {/* <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">01</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A23-1</td>
                    <td>Area Coberta - A23</td>
                    <td>Golden Square Shopping</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        Ocupado
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">02</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A23-1</td>
                    <td>Area Coberta - A23</td>
                    <td>Golden Square Shopping</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">03</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A23-1</td>
                    <td>Area Coberta - A23</td>
                    <td>Golden Square Shopping</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        Ocupado
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">04</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A23-1</td>
                    <td>Area Coberta - A23</td>
                    <td>Golden Square Shopping</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        Ocupado
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">05</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A23-1</td>
                    <td>Area Coberta - A23</td>
                    <td>Golden Square Shopping</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">01</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        Ocupado
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">02</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">03</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">04</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">05</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">01</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">02</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">03</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">04</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">05</span>
                        </Media>
                      </Media>
                    </th>
                    <td>Setor A1-1</td>
                    <td>Area Piso 1</td>
                    <td>Wall Street Business</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        Livre
                      </Badge>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Editar
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => deleteObject(e, "spots", "1")}
                          >
                            Excluir
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody> */}
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
