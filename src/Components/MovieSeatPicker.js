import React, { Component } from "react";
import SeatPicker from "react-seat-picker";

export default class Seat extends Component {
  state = {
    loading: false,
  };

  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 750));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 750));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        this.props.setSelected(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `${row}${id}`;
        addCb(row, number, id, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        null,
        {
          id: 3,
          number: 3,
        },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        null,
        { id: 9, number: 9 },
        { id: 10, number: 10 },
      ],
      [
        { id: 11, number: 1 },
        { id: 12, number: 2 },
        null,
        {
          id: 13,
          number: 3,
        },
        { id: 14, number: 4 },
        { id: 15, number: 5 },
        { id: 16, number: 6 },
        { id: 17, number: 7 },
        { id: 18, number: 8 },
        null,
        { id: 19, number: 9 },
        { id: 20, number: 10 },
      ],
      [],
      [
        { id: 21, number: 1 },
        { id: 22, number: 2 },
        null,
        {
          id: 23,
          number: 3,
        },
        { id: 24, number: 4 },
        { id: 25, number: 5 },
        { id: 26, number: 6 },
        { id: 27, number: 7 },
        { id: 28, number: 8 },
        null,
        { id: 29, number: 9 },
        { id: 30, number: 10 },
      ],
      [
        { id: 31, number: 1 },
        { id: 32, number: 2 },
        null,
        {
          id: 33,
          number: 3,
        },
        { id: 34, number: 4 },
        { id: 35, number: 5 },
        { id: 36, number: 6 },
        { id: 37, number: 7 },
        { id: 38, number: 8 },
        null,
        { id: 39, number: 9 },
        { id: 40, number: 10 },
      ],
      [
        { id: 41, number: 1 },
        { id: 42, number: 2 },
        null,
        {
          id: 43,
          number: 3,
        },
        { id: 44, number: 4 },
        { id: 45, number: 5 },
        { id: 46, number: 6 },
        { id: 47, number: 7 },
        { id: 48, number: 8 },
        null,
        { id: 49, number: 9 },
        { id: 50, number: 10 },
      ],
      [
        { id: 51, number: 1 },
        { id: 52, number: 2 },
        null,
        {
          id: 53,
          number: 3,
        },
        { id: 54, number: 4 },
        { id: 55, number: 5 },
        { id: 56, number: 6 },
        { id: 57, number: 7 },
        { id: 58, number: 8 },
        null,
        { id: 59, number: 9 },
        { id: 60, number: 10 },
      ],
      [],
      [
        { id: 61, number: 1 },
        { id: 62, number: 2 },
        null,
        {
          id: 63,
          number: 3,
        },
        { id: 64, number: 4 },
        { id: 65, number: 5 },
        { id: 66, number: 6 },
        { id: 67, number: 7 },
        { id: 68, number: 8 },
        null,
        { id: 69, number: 9 },
        { id: 70, number: 10 },
      ],
      [
        { id: 71, number: 1 },
        { id: 72, number: 2 },
        null,
        {
          id: 73,
          number: 3,
        },
        { id: 74, number: 4 },
        { id: 75, number: 5 },
        { id: 76, number: 6 },
        { id: 77, number: 7 },
        { id: 78, number: 8 },
        null,
        { id: 79, number: 9 },
        { id: 80, number: 10 },
      ],
    ];
    const { loading } = this.state;
    return (
      <div>
        <div style={{ marginTop: "100px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase.bind(this)}
            removeSeatCallback={this.removeSeatCallback.bind(this)}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />
        </div>
      </div>
    );
  }
}
