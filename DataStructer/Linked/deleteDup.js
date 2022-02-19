var deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    }
    if (curr.val !== curr.next.val) {
      curr = curr.next;
    }
  }

  return head;
};
