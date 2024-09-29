import { useState } from "react";
import { Main } from "../layout/Main";
import { linksbread } from "../utils/data";
import Breadcrumb from "../components/Breadcrumb";

export function PDP() {
  return (
    <Main>
      <div className="container">
        <Breadcrumb
          links={[
            linksbread[0],
            {
              label: "Descripcion del producto",
              link: "PDP?product=",
            },
          ]}
        ></Breadcrumb>
        <section className="product-info">
          <div className="imgpdp">
            <img src="./img/reloj.png" alt="Imagen del Apple Watch" />
          </div>
          <div>
            <section className="product-main">
              <h1>Apple Watch</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <button className="secondary">AÑADIR AL CARRITO</button>
            </section>
          </div>
        </section>
        <section className="product-characteristics">
          <h1>Caracteristicas del producto</h1>
          <table>
            <tbody>
              <tr>
                <td>Marca</td>
                <td>Apple</td>
              </tr>
              <tr>
                <td>Modelo</td>
                <td>Apple Watch</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Negro</td>
              </tr>
            </tbody>
          </table>
        </section>
        <h1>Productos relacionados</h1>
        <section className="related-items">
        </section>
      </div>
    </Main>
  );
}
