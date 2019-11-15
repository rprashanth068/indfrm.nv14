import * as React from "react";
import { Typeahead } from "react-typeahead";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
export interface INameProps {
  activeForm: number;
}

export const NameHeader: React.FC<INameProps> = props => {

  return (
    <>
      {props.activeForm === 0 && (
        <div className={`${styles.row} ${styles.paddingTopZero}`}>
          <div className={`${styles["col-2"]} ${styles.contactcolsize}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                First Name <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                className={styles["ms-TextField-field"]}
                id="formGroupExampleInput"
                placeholder=" "
              />
            </div>
          </div>
          <div className={`${styles["col-2"]} ${styles.contactcolsize}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                Middle Name
              </label>
              <input
                type="text"
                className={styles["ms-TextField-field"]}
                id="formGroupExampleInput"
                placeholder=" "
              />
            </div>
          </div>
          <div className={`${styles["col-2"]} ${styles.contactcolsize}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                Last Name <span className="required"> *</span>
              </label>
              <input
                type="text"
                className={styles["ms-TextField-field"]}
                id="formGroupExampleInput"
                placeholder=" "
              />
            </div>
          </div>
          <div className={styles["col-3"]}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                Preferred Name
              </label>
              <input
                type="text"
                className={styles["ms-TextField-field"]}
                id="formGroupExampleInput"
                placeholder=" "
              />
            </div>
          </div>
          <div className={styles["col-2"]}></div>
        </div>
      )}
      {props.activeForm === 1 && (
        <div className={styles.row}>
          <div className={`${styles["col-8"]}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                Entity Name <span className={styles.required}> *</span>
              </label>
              <input
                type="text"
                className={styles["ms-TextField-field"]}
                id="formGroupExampleInput"
                placeholder=" "
              />
            </div>
          </div>
          <div className={`${styles["col-2"]}`}>
            <div className={styles["ms-TextField"]}>
              <label
                className={styles["ms-Label"]}
                htmlFor="formGroupExampleInput"
              >
                c/o Name
              </label>
              <div className={styles["type-Ahead"]}>
                <Typeahead
                  options={["John", "Paul", "George", "Ringo"]}
                  maxVisible={2}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      )
    </>
  );
};
