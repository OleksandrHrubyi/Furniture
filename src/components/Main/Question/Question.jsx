import styles from "./question.module.css";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { alert, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";
import questionImg from "../../../image/question.jpg";

defaultModules.set(PNotifyMobile, {});

function Question({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert({
        text: "Please enter name",
      });
      return;
    }

    if (number.length === 0) {
      alert({
        text: "Please enter number",
      });
      return;
    }
    // onSubmit({ name, number });
    return reset();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        console.log("No such type of data");
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Залишились питання?</h2>
      <div className={styles.container}>
        <div>
          <img className={styles.img} src={questionImg} alt="team" />
        </div>
        <div className={styles.aboutContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              {" "}
              <h3 className={styles.subTitle}>Замовте консультацію</h3>
              <input
                className={styles.input}
                name="name"
                type="text"
                value={name}
                placeholder="Ім'я"
                onChange={handleChange}
              />
            </label>
            <label className={styles.label}>
              <input
                className={styles.input}
                name="number"
                type="number"
                value={number}
                placeholder="Номер телефону"
                onChange={handleChange}
              />
            </label>
            <button className={styles.btn} type="submit">
              ВІДПРАВИТИ
            </button>
          </form>
          <div className={styles.textInfo}>
            <span className={styles.infoRegistr}>
              Залиште заявку або телефонуйте за номером{" "}
              <strong>
                {" "}
                <nobr>(099) 111 22 33</nobr>
              </strong>
              , і наш менеджер звяжеться з вами для кваліфікованої консультації.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Question;
