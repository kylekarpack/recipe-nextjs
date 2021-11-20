import { useQuery, QueryResult } from "@apollo/client";
import React, { FunctionComponent } from "react";
import { GET_WIDGETS } from "utilities/queries";
import { Widget } from "utilities/types";
import styles from "./WidgetDisplay.module.css";

const currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

const WidgetDisplay: FunctionComponent = () => {
  const { loading, error, data }: QueryResult<Record<string, Widget[]>> = useQuery(GET_WIDGETS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className={styles.error} data-testid="error">
        {error.message}
      </div>
    );
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Quantity on Hand</th>
          <th>Cost</th>
          <th>Sales Price</th>
        </tr>
      </thead>
      <tbody>
        {data?.widgets?.map((widget) => {
          return (
            <tr key={widget.id}>
              <td>{widget.name}</td>
              <td>{widget.category}</td>
              <td>{widget.description}</td>
              <td>{widget.quantity}</td>
              <td>{currencyFormatter.format(widget.cost)}</td>
              <td>{currencyFormatter.format(widget.salePrice)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WidgetDisplay;
