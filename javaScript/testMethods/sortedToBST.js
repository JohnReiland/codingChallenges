Object.defineProperty(Array.prototype, "sortedToBST", {
  value: function () {
    if (!this.length) {
      return null;
    }
    function TreeNode(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
    const mid = Math.floor(this.length / 2);
    const root = new TreeNode(this[mid]);
    root.left = this.slice(0, mid).sortedToBST();
    root.right = this.slice(mid + 1, this.length).sortedToBST();
    return root;
  },
});
