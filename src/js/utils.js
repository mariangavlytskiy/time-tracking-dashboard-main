function previousTextByPeriod(period, value) {
  let firstPart;
  switch (period) {
    case "monthly":
      firstPart = "Last Month";
      break;
    case "weekly":
      firstPart = "Last Week";
      break;
    case "daily":
    default:
      firstPart = "Yesterday";
      break;
  }
  return `${firstPart} - ${value}hrs`;
}
