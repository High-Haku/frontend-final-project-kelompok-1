import React from "react";
import "./upgrade.css";

function Upgrade() {
  return (
    <div>
      <div className="container">
        <div className="content mt-5">
          <div>
            <p className="title-top text-center">
              Hanya Rp. 10.000/bulan untuk pertama kali Upgrade sesudahnya
              Batalkan kapan saja.
            </p>
            <button className="btn-top me-2 rounded-3">Mulai</button>
            <button className="btn-top rounded-3">Lihat Paket</button>
          </div>
        </div>

        <div className="paket mt-5">
            <h3>Pilih Paket Premium</h3>
          <div className="card">
            <div className="header">
              <p>1 Bulan cuma 10.000</p>
            </div>
            <p>Untuk pertamakali Upgrade</p>
            <hr />
          </div>
          <div className="card">
            <div className="header">
              <p>1 Bulan cuma 50.000</p>
            </div>
            <p>Paket individu untuk 1 akun</p>
            <hr />
          </div>
          <div className="card">
            <div className="header">
              <p>1 Bulan cuma 80.000</p>
            </div>
            <p>Paket Duo untuk 2 akun</p>
            <hr />
          </div>
          <div className="card">
            <div className="header">
              <p>1 Bulan cuma 100.000</p>
            </div>
            <p>Paket Family untuk 6 akun</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
