function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesDateElement = losAngelesElement.querySelector(".date");

  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");

  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let newJerseyElement = document.querySelector("#new-jersey");

  let newJerseyDateElement = newJerseyElement.querySelector(".date");

  let newJerseyTimeElement = newJerseyElement.querySelector(".time");

  let newJerseyTime = moment().tz("America/New_York");

  newJerseyDateElement.innerHTML = newJerseyTime.format("MMMM Do YYYY");

  newJerseyTimeElement.innerHTML = newJerseyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
