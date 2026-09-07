import { format, parseISO } from 'date-fns';

const PublishDate = ({ date }) => {
  const parsedTime = parseISO(date);
  const formattedTime = format(parsedTime, 'd-MMM y');

  return (
    <div class="dateContainer">
      <time datetime={date}>
        {formattedTime}
      </time>
    </div>
  );
};

export default PublishDate;
