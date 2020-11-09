import React, { useEffect } from "react";
import { requestGraphql } from "../helpers/GithubReport";

export default function GithubReporter() {
  useEffect(() => {
    requestGraphql();
  });
  //@ts-ignore

  const branchMaster = JSON.parse(localStorage.getItem("GitHub-repo")).branch0;
  const { author, committedDate, message, oid } = branchMaster.commits[0];

  return (
    <div className="box big box-content">
      <strong>Author:</strong> {author.name} <strong>Commit:</strong>{" "}
      <span style={{ color: "lime" }}> {committedDate}</span>{" "}
      <strong>Commit Message:</strong> {message} <strong>Hash:</strong>
      <pre>{oid}</pre>
    </div>
  );
}
