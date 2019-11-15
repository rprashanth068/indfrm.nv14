import * as React from "react";
import styles from "../../helloWorld/components/HelloWorld.module.scss";

export interface DocumentstableProps {}

export const Documentstable: React.FC<DocumentstableProps> = props => {
  return(
    <>

<h5>Documents</h5>
                <div className={styles.mLeft}>
                  <img
                    src={this.state.edit2 as string}
                    height="18px"
                    width="18px"
                    alt="editicon"
                    onMouseOver={() => this.iconOver("edit2")}
                    onMouseOut={() => this.iconOut("edit2")}
                  />
                  &nbsp; &nbsp; &nbsp;
                  <img
                    src={this.state.delete as string}
                    height="18px"
                    width="18px"
                    alt="deleteicon"
                    onMouseOver={() => this.iconOver("delete")}
                    onMouseOut={() => this.iconOut("delete")}
                  />
                </div>
                <div
                  className={`${styles["ms-TextField"]} ${styles["table-input"]} ${styles.mLeft}`}
                >
                  <input
                    type="text"
                    className={`${styles["ms-TextField-field"]} ${styles["table-input"]}`}
                    ref={node => (this.refe1 = node)}
                    value={this.state.selectedDocument["_docname"]}
                    id="formGroupExampleInput"
                    placeholder=" "
                    onChange={e => this.changeDocument(e)}
                  />
                  <img
                    src={this.state.delete1 as string}
                    height="20px"
                    width="20px"
                    alt="deleteicon"
                    onMouseOver={() => this.iconOver("delete1")}
                    onMouseOut={() => this.iconOut("delete1")}
                    onClick={this.saveDocuments}
                  />
                </div>

                <div className={`${styles["document-Tabel"]} ${styles.mLeft}`}>
                  <table className={styles["table-Head"]}>
                    <thead>
                      <tr>
                        <th scope="row">
                          <div className="form-check form-check-align">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                            />
                          </div>
                        </th>
                        <th scope="col">Document Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Who Uploaded</th>
                      </tr>
                    </thead>
                  </table>
                </div>

                <div
                  className={`${styles["document-Tabel"]} ${styles["scroll-table"]} ${styles.mLeft}`}
                >
                  <table className={styles["table-Body"]}>
                    <tbody>
                      {this.state.documents.map(row => (
                        <tr>
                          <td scope="row">
                            <div className="form-check form-check-align">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                                name="document_chk"
                                defaultValue={row.selected}
                                checked={row.selected}
                                onChange={e => {
                                  this.selectDocument(e, row);
                                }}
                              />
                            </div>
                          </td>
                          <td>{row.docname}</td>
                          <td>{row.dateuploaded}</td>
                          <td>{row.whouploaded}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <hr />
               )}
      )
      </div>
</>
  );
};