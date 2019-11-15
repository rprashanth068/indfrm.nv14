import * as React from "react" ;
import styles from '../../helloWorld/components/HelloWorld.module.scss';
export interface TaxnumbersProps {
}

export const Taxnumbers: React.FC<TaxnumbersProps > = (props)=> {

    return (
        <>

          <h5>Tax Number </h5>
            <div className={styles.row}>
              <div className={styles["col-2"]}>
                <div className={`${styles["ms-TextField"]}`}>
                  <label
                    className={styles["ms-Label"]}
                    htmlFor="formGroupExampleInput"
                  >
                    GST#
                  </label>
                  <input
                    type="text"
                    className={styles["ms-TextField-field"]}
                    id="formGroupExampleInput"
                    placeholder=" "
                    maxLength={17}
                  />
                </div>
              </div>
              <div className={styles["col-2"]}>
                <div className={`${styles["ms-TextField"]}`}>
                  <label
                    className={styles["ms-Label"]}
                    htmlFor="formGroupExampleInput"
                  >
                    HST#
                  </label>
                  <input
                    type="text"
                    className={styles["ms-TextField-field"]}
                    id="formGroupExampleInput"
                    placeholder=" "
                    maxLength={17}
                  />
                </div>
              </div>
              <div className={styles["col-2"]}>
                <div className={`${styles["ms-TextField"]}`}>
                  <label
                    className={styles["ms-Label"]}
                    htmlFor="formGroupExampleInput"
                  >
                    PST#
                  </label>
                  <input
                    type="text"
                    className={styles["ms-TextField-field"]}
                    id="formGroupExampleInput"
                    placeholder=" "
                    maxLength={8}
                  />
                </div>
              </div>
              <div className={styles["col-2"]}>
                <div className={`${styles["ms-TextField"]}`}>
                  <label
                    className={styles["ms-Label"]}
                    htmlFor="formGroupExampleInput"
                  >
                    QST#
                  </label>
                  <input
                    type="text"
                    className={styles["ms-TextField-field"]}
                    id="formGroupExampleInput"
                    placeholder=" "
                    maxLength={15}
                  />
                </div>
              </div>
            </div>
            <hr />
            )}
      )
    </>
  );
};