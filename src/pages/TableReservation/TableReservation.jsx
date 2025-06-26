import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string, number, date } from 'yup';
import Button from '../../components/Button/Button';
import useSubmit from '../../hooks/useSubmit';
import getToday from '../../utils/getToday';

const TableReservation = () => {
  const navigate = useNavigate();
  const { isLoading, response, submit } = useSubmit();

  const schema = object({
    date: date().required(),
    time: string()
      .required()
      .matches(/^[12]\d:00$/),
    guests: number().required().min(1).max(10),
    occasion: string().required()
  });

  const formik = useFormik({
    initialValues: {
      date: getToday(),
      time: '17:00',
      guests: 1,
      occasion: 'Birthday'
    },
    onSubmit: (values) => {
      console.table(values);
      submit(location.href, values);
    },
    validationSchema: schema
  });

  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        navigate('/reservation-success', {
          state: response.data
        });
        formik.resetForm();
      } else {
        console.debug('error:', response.message);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <div className="flex flex-col items-center pb-20 pt-12">
      <h1 className="font-serif text-4.5xl text-olive">Table Reservation</h1>
      <form onSubmit={formik.handleSubmit} className="mt-4 w-96">
        <div className="h-24">
          <label
            htmlFor="date"
            className="text-xl font-bold leading-8 text-olive"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            className="h-10 w-full rounded border border-olive-light pl-3 text-olive"
          />
          <p className="leading-relaxed text-orange" data-testid="date-error">
            {formik.errors.date}
          </p>
        </div>
        <div className="h-24">
          <label htmlFor="time" className="text-xl font-bold text-olive">
            Time
          </label>
          <select
            id="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            className="h-10 w-full rounded border border-olive-light pl-3 text-olive"
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <p className="leading-relaxed text-orange" data-testid="time-error">
            {formik.errors.time}
          </p>
        </div>
        <div className="h-24">
          <label htmlFor="guests" className="text-xl font-bold text-olive">
            Number of guests
          </label>
          <input
            type="number"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={formik.values.guests}
            onChange={formik.handleChange}
            className="h-10 w-full rounded border border-olive-light pl-3 text-olive"
          />
          <p className="leading-relaxed text-orange" data-testid="guests-error">
            {formik.errors.guests}
          </p>
        </div>
        <div className="h-24">
          <label htmlFor="occasion" className="text-xl font-bold text-olive">
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formik.values.occasion}
            onChange={formik.handleChange}
            className="h-10 w-full rounded border border-olive-light pl-3 text-olive"
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>
          <p
            className="leading-relaxed text-orange"
            data-testid="occasion-error"
          >
            {formik.errors.occasion}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Button
            id="submit"
            text="Reserve now"
            type="submit"
            disabled={!formik.isValid || isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default TableReservation;
