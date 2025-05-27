#include<stdio.h>
void towerOfHanoi(int n, char from_tower, char aux_tower, char to_tower){
        if(n == 1){
            printf("Move disk 1 from %c to %c\n", from_tower, to_tower);
            return;
        }
        towerOfHanoi(n-1, from_tower, to_tower, aux_tower);
        printf("Move disk %d from %c to %c\n", n, from_tower, to_tower);
        towerOfHanoi(n-1, aux_tower, from_tower, to_tower);
    }
int main(){
    int n = 4;
    towerOfHanoi(n, 'A', 'B', 'C');
   
    return 0;
}