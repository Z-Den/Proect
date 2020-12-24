MOV @M,R0
system 5
mov 2,r1
mov f,r2
k:
system d
sub 1,r2
jnz k

STOP
M:
  DATA 0000
  DATA 0180
  DATA 03c0
  DATA 07e0
  DATA 0ff0
  DATA 0420
  DATA 0420
  DATA 07e0


