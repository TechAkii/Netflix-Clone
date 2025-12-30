<script>
  const gallery = document.getElementById("gallery");

  function scrollLeft() {
    gallery.scrollLeft -= gallery.offsetWidth / 4;
  }

  function scrollRight() {
    gallery.scrollLeft += gallery.offsetWidth / 4;
  }
</script>
