import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";
const edit_ico = require("../../../icons/NRD-00001_02013_ICO_Edit 52525b_001.svg");

export interface CommentstableProps {
  delete3: any;
  plus: any;
  comments: any;
  selectedComment: any;
  iconOver: any;
}

export const Commentstable: React.FC<CommentstableProps> = props => {
  const [edit, setEdit] = React.useState(edit_ico);

  return (
    <>
      <h5>Comments</h5>
      <div className={styles.mLeft}>
        <img
          src={edit as string}
          height="18px"
          width="18px"
          alt="editicon"
          onMouseOver={() => props.iconOver("edit")}
          onMouseOut={() => this.iconOut("edit")}
        />
        &nbsp; &nbsp; &nbsp;
        <img
          src={props.delete3 as string}
          height="18px"
          width="18px"
          alt="deleteicon"
          onMouseOver={() => this.iconOver("delete3")}
          onMouseOut={() => this.iconOut("delete3")}
        />
      </div>
      <div
        className={`${styles["ms-TextField"]} ${styles["table-input"]} ${styles.mLeft}`}
      >
        <div>
          <span>
            <input
              type="text"
              className={`${styles["ms-TextField-field"]} ${styles["table-input"]}`}
              ref={node => (this.refe2 = node)}
              value={props.selectedComment["_gcomment"]}
              id="formGroupExampleInput"
              placeholder=" "
              onChange={e => this.changeComment(e)}
            />
          </span>
          <span className={styles["margin-icons"]}>
            <img
              src={props.plus as string}
              height="18px"
              width="18px"
              alt="plusicon"
              onMouseOver={() => this.iconOver("plus")}
              onMouseOut={() => this.iconOut("plus")}
              onClick={this.saveComments}
            />
          </span>
        </div>
      </div>
      <div className={`${styles["comments-Tabel"]} ${styles.mLeft}`}>
        <table className={styles["table-Head"]}>
          <thead>
            <tr>
              <th scope="row">
                <div>
                  <input type="checkbox" id="gridCheck" />
                </div>
              </th>
              <th scope="col">General comment regarding Individual</th>
              <th scope="col">Date</th>
              <th scope="col">Who</th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        className={` ${styles["scroll-table"]} ${styles["comments-Tabel"]} ${styles.mLeft}`}
      >
        <table className={styles["table-Body"]}>
          <tbody>
            {props.comments.map(row => (
              <tr>
                <td scope="row">
                  <div className="form-check form-check-align">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      name="comment_chk"
                      defaultValue={row.selected}
                      checked={row.selected}
                      onChange={e => {
                        this.selectComment(e, row);
                      }}
                    />
                  </div>
                </td>

                <td>{row.gcomment}</td>

                <td>{row.date}</td>

                <td>{row.who}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr />
        )} )
      </div>
    </>
  );
};
