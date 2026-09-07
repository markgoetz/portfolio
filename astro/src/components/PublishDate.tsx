import { format, parseISO } from "date-fns";
import React from "react";

export type PublishDateProps = {
  date: string;
};

const PublishDate = ({ date }: PublishDateProps) => {
  const parsedTime = parseISO(date);
  const formattedTime = format(parsedTime, "d-MMM y");

  return (
    <div className="dateContainer">
      <time dateTime={date}>{formattedTime}</time>
    </div>
  );
};

export default PublishDate;
