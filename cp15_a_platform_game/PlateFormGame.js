/**
 * Created by wzhu on 12/12/15.
 */

function Level(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.grid = [];
  this.actor = [];
}