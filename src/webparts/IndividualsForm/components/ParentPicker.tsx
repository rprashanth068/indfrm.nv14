import * as React from "react";
import { Typeahead } from "react-typeahead";
import styles from "../../helloWorld/components/HelloWorld.module.scss";

export interface ParentPickerProps {}

export const ParentPicker: React.FC<ParentPickerProps> = props => {
  return(
    <>
    <h5>Parent (Individual or Entity)</h5>
            <div className={styles.row}>
              <div className={styles["col-3"]}>
                <div className={styles["type-Ahead"]}>
                  <Typeahead
                    options={["John", "Paul", "George", "Ringo"]}
                    maxVisible={2}
                  />
                </div>
              </div>
              <div
                className={`${styles["col-2"]} ${styles["usericon-align"]}}`}
              >
                <i className="fas fa-user"></i>
              </div>
            </div>
            <hr />
            )}
      )
    </>
  );
};